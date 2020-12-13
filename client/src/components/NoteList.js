/*import { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button, Container } from 'reactstrap';
import uuid from 'uuid';

class NoteList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Note one' },
            { id: uuid(), name: 'Note two' },
            { id: uuid(), name: 'Note three' },
            { id: uuid(), name: 'Note four' }
        ]
    };

    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter Item');
                    if(name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name}]
                        }));
                    }
                }}
                >Add Note
                </Button>
                
                <ListGroup>
                    <TransitionGroup className="note-list">
                    {items.map(({ id, name }) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                        <ListGroupItem>
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => {
                                    this.setState(state => ({
                                        items: state.items.filter(item = item.id != id)
                                    }));
                                }}
                                > &times;
                            </Button>
                            {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                </ListGroup>
             </Container>
            );
        };
    }

export default NoteList;*/