angular.module('app')
  .factory('ExcelImporter', [
    '$rootScope',
    '$mdDialog',
    '$mdToast',
    '$translate',
    'ExcelExtractor',
    (
      $rootScope,
      $mdDialog,
      $mdToast,
      $translate,
      ExcelExtractor
    ) => {
      let service = {};

      service['import'] = async(model, config, cb) => {
        document.getElementById('import-trigger').setAttribute('disabled', 'disabled');

        const records = await ExcelExtractor.extract(document.getElementById('import'), config);
        let recordsResolved = [];
        for (const record of records) {
          if (_.has(config, 'preSave')) {
            recordsResolved.push(await config.preSave(record));
          } else {
            recordsResolved.push(record);
          }
        }

        let updateReferences = [];
        _.each(config.maps, (v) => {
          if (
            v instanceof Object &&
            _.has(v, 'updateReference') &&
            v.updateReference &&
            !_.get(v, 'id')
          ) {
            updateReferences.push(v.column);
          }
        });
        if (!updateReferences.length) {
          const recordsCreated = await model.createMany(recordsResolved).$promise;
          if (_.has(config, 'rowProcessed')) {
            for (const recordCreated of recordsCreated) {
              await config.rowProcessed(recordCreated);
            }
          }

          cb();
          $mdToast.show(
            $mdToast.simple()
            .textContent($translate.instant('success.import', {
              name: config.name,
              total: recordsCreated.length,
            }))
            .position('bottom right')
          );
          document.getElementById('import-trigger').removeAttribute('disabled');
          $mdDialog.hide();
        } else {
          let processedRecords = 0;
          for (const recordResolved of recordsResolved) {
            let where = {};
            _.each(updateReferences, (c) => {
              if (_.get(recordResolved, c)) {
                where[c] = recordResolved[c];
              }
            });
            try {
              if (Object.keys(where).length) {
                const modelCount = await model.count({
                  where,
                }).$promise;
                if (modelCount.count == 1) {
                  await model.update({
                    where,
                  }, recordResolved).$promise;
                } else {
                  await model.create(recordResolved).$promise;
                }
                processedRecords++;
              } else {
                await model.create(recordResolved).$promise;
                processedRecords++;
              }
            } catch (e) {
              //
            }
            if (processedRecords === recordsResolved.length) {
              document.getElementById('import-trigger').removeAttribute('disabled');
              cb();
              $mdToast.show(
                $mdToast.simple()
                .textContent($translate.instant('success.import.processed', {
                  name: config.name,
                  total: processedRecords,
                }))
                .position('bottom right')
              );
              $mdDialog.hide();
            }
          }
        }
      };

      return service;
    },
  ]);