angular.module('app')
  .factory('ExcelExtractor', () => {
    let convertLetterToNumber = (str) => {
      let out = 0,
        len = str.length;
      for (let pos = 0; pos < len; pos++) {
        out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
      }
      return out;
    };

    return {
      extract: (target, config) => {
        return new Promise((resolve) => {
          const results = [];
          let files = target.files;
          let f = files[0];
          
          let reader = new FileReader();
          reader.onload = async(e) => {

            let data = e.target.result;
            let workbook = XLSX.read(data, {
              type: 'binary',
            });
            let sheetName = workbook.SheetNames[0];
            let sheet = workbook.Sheets[sheetName];
            let cellRecordStartNumber = convertLetterToNumber(config.cellStart);
            let totalRecords = 0;
            let cellTitles = {};

            _.each(sheet, (cell, cellName) => {
              if (cellName != '!ref') {
                let cellNumber = cellName.replace(/[a-z]/gi, '');
                let cellAlphabet = cellName.replace(/[0-9]/g, '');
                let cellAlphabetNumber = convertLetterToNumber(cellAlphabet);
                if (cellNumber > config.rowStart && cellAlphabet == config.cellStart) {
                  totalRecords++;
                }

                if (cellNumber == config.rowStart && cellAlphabetNumber > cellRecordStartNumber) {
                  cellTitles[cellAlphabet] = cell.v;
                }
              }
            });

            for (let i = config.rowStart + 1; i <= totalRecords + config.rowStart; i++) {
              const cells = [];
              for (const cellAlphabet in cellTitles) {
                const cellTitle = cellTitles[cellAlphabet];
                let columnName, cellValue;
                if (
                  _.isObject(config.maps[cellTitle]) &&
                  !_.isUndefined(config.maps[cellTitle])
                ) {
                  columnName = config.maps[cellTitle].column;
                } else if (_.isString(config.maps[cellTitle])) {
                  columnName = config.maps[cellTitle];
                }
                if (!_.isUndefined(sheet[cellAlphabet.concat(i)]) &&
                  sheet[cellAlphabet.concat(i)].w.trim() !== '' &&
                  sheet[cellAlphabet.concat(i)].w.trim() !== null
                ) {
                  sheet[cellAlphabet.concat(i)].w = sheet[cellAlphabet.concat(i)].w.trim();
                  sheet[cellAlphabet.concat(i)].v =
                    sheet[cellAlphabet.concat(i)].v.toString().trim();
                  if (
                    _.isObject(config.maps[cellTitle]) &&
                    !_.isUndefined(config.maps[cellTitle])
                  ) {
                    if (!_.isUndefined(config.maps[cellTitle].format)) {
                      switch (config.maps[cellTitle].format) {
                        case 'date':
                          cellValue = moment(
                            sheet[cellAlphabet.concat(i)].w,
                            config.maps[cellTitle].dateFormatFrom
                          ).format(config.maps[cellTitle].dateFormatTo);
                          break;
                      }
                    } else {
                      cellValue = sheet[cellAlphabet.concat(i)].v;
                    }
                  } else if (_.isString(config.maps[cellTitle])) {
                    cellValue = sheet[cellAlphabet.concat(i)].v;
                  }
                } else {
                  cellValue = null;
                }
                if (
                  _.isObject(config.maps[cellTitle]) &&
                  !_.isUndefined(config.maps[cellTitle])
                ) {
                  if (!_.isUndefined(config.maps[cellTitle].processor) && cellValue) {
                    cellValue = await config.maps[cellTitle].processor(cellValue);
                  }
                }
                cells.push({
                  col: columnName,
                  val: cellValue,
                });
              }

              const thisResult = {};
              _.each(cells, (v) => {
                thisResult[v.col] = v.val;
              });
              results.push(thisResult);
            }
            resolve(results);
          };
          reader.readAsBinaryString(f);
        });
      },
    };
  });