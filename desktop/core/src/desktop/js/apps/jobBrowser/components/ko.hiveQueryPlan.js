// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import componentUtils from 'ko/components/componentUtils';
import DisposableComponent from 'ko/components/DisposableComponent';

export const HIVE_QUERY_PLAN_COMPONENT = 'hive-query-plan';

// prettier-ignore
const TEMPLATE = `
  <pre data-bind="text: plan"></pre>
`;

class HiveQueryPlan extends DisposableComponent {
  constructor(params) {
    super();
    this.plan = params.plan;
  }
}

componentUtils.registerComponent(HIVE_QUERY_PLAN_COMPONENT, HiveQueryPlan, TEMPLATE);
