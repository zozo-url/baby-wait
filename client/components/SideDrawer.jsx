import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Link } from 'react-router-dom'

const SideDrawer = (props) => {

    

    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <Link to ="/home" style = {{
                    textDecoration: 'none',
                }}>
                <ListItem button onClick={()=> scrollToElement('featured')}>
                   Home
                </ListItem>
                </Link>
                    <br/>

                <Link to = "/parent/login" style = {{
                    textDecoration: 'none',
                }}>
                <ListItem button onClick={()=> scrollToElement('featured')}>
                   Log In
                </ListItem>
               </Link>
                    <br/>
                 

                <Link to = "/parent/register" style = {{
                    textDecoration: 'none',
                    }}>
                <ListItem button onClick={()=> scrollToElement('featured')}>
                   Parent Register
                </ListItem>
                </Link>
                        <br/>

                <Link to = "/ecc/register" style = {{
                    textDecoration: 'none',
                    }}>
                <ListItem button onClick={()=> scrollToElement('featured')}>
                   Early Child Care Register
                </ListItem>
                </Link>

                  <br/>

                <Link to = "#/parent/home" style = {{
                    textDecoration: 'none',
                }}>
                <ListItem button onClick={()=> scrollToElement('featured')}>
                   Parent Dash Board Log In
                </ListItem>
               </Link>
                    <br/>
            </List> 
        </Drawer>
    );
};

export default SideDrawer;