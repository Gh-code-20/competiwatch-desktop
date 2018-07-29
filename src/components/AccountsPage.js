import React, { Component } from 'react'
import AccountForm from './AccountForm'
import AccountsList from './AccountsList'

class AccountsPage extends Component {
  render() {
    const { onAccountChange, season, accounts, onDelete } = this.props

    return (
      <div className="container layout-children-container">
        <div className="col-8 mb-4">
          <AccountsList
            season={season}
            accounts={accounts}
            onDelete={onDelete}
            onAccountChange={onAccountChange}
          />
          <h2
            className="h2 text-normal mb-2 border-top mt-4 pt-3"
          >Add an account</h2>
          <p>Add an account to log the competitive matches you've played on that account.</p>
          <AccountForm
            onCreate={this.props.onCreate}
            totalAccounts={accounts.length}
          />
        </div>
      </div>
    )
  }
}

export default AccountsPage
