module.exports = (params) => `
// @flow
import * as React from 'react';

// Types
import type {Props} from './types';

// Styles
import style from './style.scss';

const ${params.name} = (props: Props) => (
    <div className={style.root}>
        ${params.name}
    </div>
);

export default ${params.name};

`.trim();