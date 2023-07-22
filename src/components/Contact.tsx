import React from 'react';
import { AtSymbolIcon, InboxIcon } from '@heroicons/react/24/solid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { contacts } from './datajsons/contactdata';


function Contact() {

    return (
      <section id='contact' className='text-gray-300 body-font'>
        <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
          <div className='flex flex-col w-full mb-20'>
            <AtSymbolIcon className='mx-auto inline-block w-10 mb-4' />
            <h1 className='sm:text-4xl text-3xl font-medium title-font text-white'>
              Contact Me
            </h1>
          </div>
          <div className='text-center'>
            <List sx={{ width: '100%', maxWidth: 200, bgcolor: ''}} className='mx-auto inline-block content-center'>
              {contacts.map(contact => (
                <div key={contact.platform}>
                  <ListItem alignItems='flex-start'>
                    <ListItemAvatar>
                      <Avatar alt={contact.platform} src={contact.icon} />
                    </ListItemAvatar>

                    <ListItemText 
                    primary={
                      <React.Fragment>
                        <Typography className='text-white font-bold'
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body1'
                        fontWeight='bold'
                        >
                          {contact.platform}
                        </Typography>
                      </React.Fragment>} 
                    secondary={
                      <React.Fragment>
                        <Typography className='text-gray-300'
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        >
                          {contact.handle}
                        </Typography>
                      </React.Fragment>
                    } 
                    />
                  </ListItem>
                </div>
              ))}
            </List>
          </div>
        </div>
      </section>
    );

}

export default Contact;