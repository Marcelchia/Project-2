const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Create extends React.Component {
  render() {
    let data = [];
    let total_expense = this.props.result2.rows[0].sum;
    const list = this.props.result.map (expense => {
      return (
        <tr>
          <th scope="col">{expense.category}:</th>
          <td scope="col">${expense.cat_expense}</td>
        </tr>
      )
    });
    data = JSON.stringify(data);
    return(
      <Layout>
        <Nav>
        </Nav>
        <body>
          <div className="row col-12 myStat">
            <div className="col-2"></div>
            <div className="card text-white bg-dark mb-3 col-4">
              <h1>Expense Summary</h1><br/>
              <p>From <b>{moment(this.props.start_date).format('ll')}</b> to <b>{moment(this.props.end_date).format('ll')}</b></p>
              <table class="table table-dark mb-3 text-white">
                {list}
                <tr>
                  <th scope="col">Total Expenses:</th>
                  <td scope="col">${this.props.result2.rows[0].sum}</td>
                </tr>
              </table>
            </div>
           </div>
        </body>
      </Layout>
    )
  }
}

module.exports = Create;