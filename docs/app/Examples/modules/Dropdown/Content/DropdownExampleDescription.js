import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleDescription = () => (
  <Dropdown icon='filter' text='Filter' floating labeled button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Divider />
      <Dropdown.Item description='2 new' text='Important' />
      <Dropdown.Item description='10 new' text='Announcement' />
      <Dropdown.Item description='5 new' text='Discussion' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleDescription
