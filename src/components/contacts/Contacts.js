import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import { getContacts, deleteContact } from './../../redux/actions/contacts';
import PropTypes from 'prop-types'

class Contacts extends Component {
  
  componentDidMount () {
    this.props.getContacts();
  }

  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} deleteContact={deleteContact}/>
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  contacts: state.contacts
});

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(getContacts),
  deleteContact: (id) => dispatch(deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
