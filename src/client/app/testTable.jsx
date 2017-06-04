import React from 'react';
import Reactable from 'reactable';

/* Here's tutorial for getting form data from user
https://facebook.github.io/react/docs/forms.html
*/

var Table = Reactable.Table,
    Thead = Reactable.Thead,
    Th = Reactable.Th;

var tableData = [
    {id:1, etunimi:"Viljami", sukunimi:"Ketola", sähköposti:"viljami.ketola@eng.tamk.fi",paikkakunnalta:"Äetsä"},
    {id:2, etunimi:"Vaimo", sukunimi:"Ketola", sähköposti:"vaimo.ketola@gmail.com",paikkakunnalta:"Kangasala"},
    {id:3, etunimi:"Lapsi", sukunimi:"Ketola", sähköposti:"vauva@hotmail.com",paikkakunnalta:"Tampere, Hallila"},
    {id:4, etunimi:"Francis", sukunimi:"Horner", sähköposti:"FrancisIHorner@dayrep.com",paikkakunnalta:"Linemen"},
    {id:5, etunimi:"Säde", sukunimi:"Lämpsä", sähköposti:"SadeLampsa@dayrep.com ",paikkakunnalta:"Kurjala"},
    {id:6, etunimi:"Ritva", sukunimi:"Hautamäki", sähköposti:"RitvaHautamaki@jourrapide.com",paikkakunnalta:"Näetsä"},
    {id:7, etunimi:"Ulla-Maj", sukunimi:"Hautala", sähköposti:"Ulla-MajHautala@teleworm.us ",paikkakunnalta:"Närpes"},
    {id:8, etunimi:"Leila", sukunimi:"Inberg", sähköposti:"LeilaInberg@dayrep.com",paikkakunnalta:"Kokkola"},
    {id:9, etunimi:"Atso", sukunimi:"Saarijärvi", sähköposti:"atso.saarijarvi@armyspy.com",paikkakunnalta:"Rovajärvi"},
    {id:10, etunimi:"Impi", sukunimi:"Myllylä", sähköposti:"noita@shamans.info",paikkakunnalta:"Korvatunturi"},
    {id:11, etunimi:"Saimi", sukunimi:"Mäntylä", sähköposti:"se.saimi.taas@live.com",paikkakunnalta:"Tammisaari"}
];

class SortableTable extends React.Component {
    renderTable() {
        return (
            <Table className="table table-responsive" 
                filterable={['id','etunimi', 'sukunimi', 'paikkakunnalta']}
                noDataText="No matching records found"
                itemsPerPage={5}
                currentPage={0}
                sortable={true}
                data={tableData}>
                <Thead>
                    <Th column="id">ID</Th>
                    <Th column="etunimi">Etunimi</Th>
                    <Th column="sukunimi">Sukunimi</Th>
                    <Th column="sähköposti">Sähköposti</Th>
                    <Th column="paikkakunnalta">Paikkakunnalta</Th>
                </Thead>
            </Table>
        )
    }

  render() {
      return (
        <div>
          {this.renderTable()}
        </div>
      )
  }
}

export default SortableTable;