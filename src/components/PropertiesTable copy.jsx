import React from 'react'

import {Table} from 'react-bootstrap';
import PropertyRow from './PropertyRow';

export default function PropertiesTable() {

    let properties = require('../data/properties.json')

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Full Address</th>
                    <th>Price</th>
                    <th>Units</th>
                </tr>
            </thead>
            <tbody>
                { properties.map(p => <PropertyRow property={p} />)}
            </tbody>
        </Table>
    )
}
