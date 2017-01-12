require('./app');
require('./app-acl');
require('./app-chart');
require('./app-config');
require('./app-constant');
require('./app-formly');
require('./app-locale');
require('./app-routes');
require('./app-run');
require('./app-translate');

require('./components/controllers/login');
require('./components/controllers/dashboard');

require('./components/controllers/user/model');
require('./components/controllers/user/create');
require('./components/controllers/user/update');
require('./components/controllers/user/view');
require('./components/controllers/user/list');

require('./components/controllers/package/model');
require('./components/controllers/package/create');
require('./components/controllers/package/update');
require('./components/controllers/package/view');
require('./components/controllers/package/list');

require('./components/controllers/question/model');
require('./components/controllers/question/create');
require('./components/controllers/question/update');
require('./components/controllers/question/view');
require('./components/controllers/question/list');

require('./components/controllers/package/schedule/model');
require('./components/controllers/package/schedule/list');

require('./components/controllers/grade/list');

require('./components/controllers/grade/answer/list');
require('./components/controllers/grade/answer/view');

require('./components/controllers/test/start');
require('./components/controllers/test/finish');

require('./components/services/rest');
require('./components/services/menu');
require('./components/services/utils');
require('./components/services/authentication');
require('./components/services/excel-extractor');
require('./components/services/excel-importer');

require('./components/filters/range');

require('./components/directives/compile');
