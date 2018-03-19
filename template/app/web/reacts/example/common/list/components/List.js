import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/index.scss';

export default class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { list } = this.props;
        return (
            <div className="fm-list">
                {
                    list.map((item, index) => {
                        return (
                            <dl key={index}>
                                <dt><i>Q</i>{item.title}</dt>
                                <dd>
                                    <i>A</i>
                                    <div>{item.content}</div>
                                </dd>
                            </dl>
                        );
                    })
                }
            </div>
        );
    }
}

// List.propTypes = {
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     onShow: PropTypes.func.isRequired
// };