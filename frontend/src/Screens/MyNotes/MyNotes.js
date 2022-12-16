import React, { useEffect, useState } from "react";
import MainScreen from "../../MainScreen";
import { Link } from "react-router-dom";
import { Button, Card, Badge, Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../../Components/ErrorMessage';
import Loading from '../../Components/Loading'

import axios from "axios";
import { listNotes, deleteNoteAction } from "../../actions/notesActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MyNotes() {


  const dispatch=useDispatch();


  const noteList= useSelector(state=> state.noteList);
  const {loading,notes,error}=noteList;

  const userLogin= useSelector(state=> state.userLogin);
  const {userInfo}=userLogin;

  const noteCreate= useSelector(state=> state.noteCreate);
  const {success:successCreate}=noteCreate;
  const noteUpdate= useSelector(state=> state.noteUpdate);
  const {success:successUpdate}=noteUpdate;

  const noteDelete= useSelector(state=> state.noteDelete);
  const {loading:loadingDelete,error:errorDelete,success:successDelete}=noteDelete; 
  
   

  // const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
        dispatch(deleteNoteAction(id));
    }
  };
  // const fetchNotes = async () => {
  //   const { data } = await axios.get("/api/notes");
  //   setNotes(data);
  // };

  console.log(notes);
  const history= useHistory();

  useEffect(() => {
    

    dispatch(listNotes());
    if(!userInfo){
      history.push("/");

    }
    // fetchNotes();
  }, [dispatch,successCreate,history,userInfo,successUpdate,successDelete]);
  return (
    <MainScreen title="welcome simran rathore ">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {errorDelete && (<ErrorMessage variant='danger'>{errorDelete}</ErrorMessage>)}
      {loadingDelete && <Loading/>}


      {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
      {loading && <Loading/>}
      {notes?.reverse().map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                // onClick={() => ModelShow(note)}
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.Toggle>
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Create on -date
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>

    /* <Card style={{ margin: 10 }} key={note._id}>
          <Card.Header style={{ display: "flex" }}>
            <span
              // onClick={() => ModelShow(note)}
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            > */

    /* <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {note.title}
                    </Accordion.Toggle> */

    /* </span> */

    /* <div>
              <Button href={`/note/${note._id}`}>Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </Button>
            </div>
          </Card.Header> */

    /* <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <ReactMarkdown>{note.content}</ReactMarkdown>
                      <footer className="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                          {note.createdAt.substring(0, 10)}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse> */
    /* </Card>
      </Link>
    </MainScreen> */
  );
}

export default MyNotes;
