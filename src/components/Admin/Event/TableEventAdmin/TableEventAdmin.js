import React from "react";
import { Table, Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableEventAdmin.scss";

export function TableEventAdmin(props) {
  const { events } = props;
  return (
    <Table className="table-event-admin">

      <Table.Header>
        <Table.Row>
          <Table.HeaderCell> Titulo </Table.HeaderCell>
          <Table.HeaderCell> Hora </Table.HeaderCell>
          <Table.HeaderCell> Fecha </Table.HeaderCell>
          <Table.HeaderCell> Categoria </Table.HeaderCell>
          <Table.HeaderCell> Activo </Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>  
      </Table.Header>

      <Table.Body>
        {map(events, (event, index) => (
          <Table.Row key={index}>
            <Table.Cell> {event.title} </Table.Cell>
            <Table.Cell> {event.time} </Table.Cell>
            <Table.Cell> {event.date} </Table.Cell>
            <Table.Cell> {event.category_data.title} </Table.Cell>
            <Table.Cell className="status"> 
              {event.active ? <Icon name="check" /> : <Icon name="close" />}
            </Table.Cell>
            <Actions events={events} />
          </Table.Row>
        ))}
      </Table.Body>

    </Table>
  );
}

function Actions(props) {
  const { events } = props;
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => console.log('Editar...')}>
        <Icon name="pencil" />
      </Button>

      <Button icon negative onClick={() => console.log('Eliminar...')}>
        <Icon name="close" />
      </Button>

    </Table.Cell>
  )
}
