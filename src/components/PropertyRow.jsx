import React from 'react'

export default function PropertyRow(props) {
    let property = props.property

    return (
        <tr>
            <td><a target="_blank" href={property.url}>{property.address}</a></td>
            <td>{property.price}</td>
            <td>{property.summary['Total Units']}</td>
        </tr>
    )
}
