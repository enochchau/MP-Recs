import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


function RouteTableHeader (props){
  return(
    <Typography variant="h6">{props.locationTitle}</Typography>
  );
}

function RouteTableCell (props){
  return(
    <React.Fragment>
      <TableRow hover key={props.route.id}>
        <TableCell component="th" scope="row">
          <Link href={props.route.url}>{props.route.name}</Link>
        </TableCell>
        <TableCell>{props.route.rating}</TableCell>
        <TableCell>{props.route.stars}</TableCell>
        <TableCell>{props.route.starVotes}</TableCell>
        <TableCell>
          {props.route.toDo
            ? <CheckIcon/>
            : <ClearIcon/>                   
          }
        </TableCell>
        <TableCell>
          <img src={props.route.imgSqSmall} alt="Unavailable"></img>
        </TableCell>
        <TableCell>
          <List dense={true}>
          {props.route.location.map((loc,index) => (
            <ListItem button key={index}>
              <ListItemText primary={loc}/>
            </ListItem>
          ))}
          </List>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function RouteTable(props){
  return(
    <React.Fragment>
      <RouteTableHeader locationTitle={"Recommended Routes"}/>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Stars</TableCell>
              <TableCell>Star Votes</TableCell>
              <TableCell>To Do</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.recList.map((route) => (
              <RouteTableCell key={route.id} route={route}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

