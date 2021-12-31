import React from 'react'

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import parsePrice from '../util/parsePrice';

export default function PropertiesTable() {

    let properties = require('../data/properties.json')

    properties = properties.map(p => {
        return {
            'address': p.address,
            'url': p.url,
            'price': parsePrice(p.price),
            'units': parseInt(p.summary['Total Units']),
            'pricePerUnit': parseInt(parsePrice(p.price) / parseInt(p.summary['Total Units']))
        }
    })

    function formatAddressLink(cell, row){
        return `<a target="_blank" href=${row.url}>${cell}</a>`;
    }

    return (
        <BootstrapTable data={properties} striped={true} hover={true}>
            <TableHeaderColumn dataFormat={formatAddressLink} dataField="address" isKey={true} dataAlign="center" dataSort={true}>Address</TableHeaderColumn>
            <TableHeaderColumn dataField="price" dataSort={true}>Price</TableHeaderColumn>
            <TableHeaderColumn dataField="units" dataSort={true}>Units</TableHeaderColumn>
            <TableHeaderColumn dataField="pricePerUnit" dataSort={true}>Price Per Unit</TableHeaderColumn>
        </BootstrapTable>
    )
}
