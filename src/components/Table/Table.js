import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import 'react-table/react-table.css';

const Table  = ({data, addMessage}) => {
    const columns = [{
        Header: 'First Name',
        accessor: 'firstName',
        id: 1
    }, {
        Header: 'Last Name',
        accessor: 'lastName',
        id: 2
    }, {
        Header: 'Возраст',
        accessor: 'age',
        id: 3
    }, {
        Header: 'E-mail',
        accessor: 'email',
        id: 4
    }];
    return (<ReactTable
        data={data}
        columns={columns}
        sortable={true}
        previousText="Предыдущая"
        nextText="Следующая"
        loadingText="Загрузка..."
        noDataText="Не найдена строка"
        pageText="Страница"
        ofText="из"
        rowsText="строк"
        getTdProps={(state, rowInfo) => ({
            onClick: (e, handleOriginal) => {
                if (rowInfo && rowInfo.original && rowInfo.original.id) {
                    addMessage({
                        ...rowInfo.original,
                        type: 'row',
                        title: 'Подробности'
                    });
                    if (handleOriginal) {
                        handleOriginal();
                    }
                }
            }
        })}
    />);
};

Table.propTypes = {
    data: PropTypes.array.isRequired,
    addMessage: PropTypes.func.isRequired
};

export default Table;
