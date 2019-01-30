

class Table extends React.Component {

    state = {tableNumber: this.props.tableNumber}

    render() {
        return(
            <div>This is a table {this.state.tableNumber}</div>
        );
    }

}

export default Table;