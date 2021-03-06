// -*- mode: js; js-indent-level:2;  -*-
/* Copyright 2018-present Samsung Electronics Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var console = require('console');
var async = require('iotjs/async/index.js');

async.waterfall(
    [
      function(callback) {
        callback(null, 42);
      },
      function(res, callback) {
        callback(null, [4, 2]);
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res);
    });
