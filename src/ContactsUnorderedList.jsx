const ContactsUnorderedList = ({contactList, title}) => {
  return (
    <div id={title}>
      <p>{title}</p>
      <ul>
        {
          //map through each contact, return an li with name
          contactList.map((currentContact) => {
            return <li key={currentContact.id}>{
              title === 'Name' ? currentContact.name : 
                title === 'Email' ? currentContact.email :
                currentContact.phone
              }</li>
          })
        }
      </ul>
    </div>
  )
}

export default ContactsUnorderedList; 