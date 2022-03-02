import React from 'react';
import Cookies from 'js-cookie';
import { Container, Pagination, Label, Card, Popup, Button, Icon } from 'semantic-ui-react';
import moment from 'moment';

export class JobSummaryCard extends React.Component {
    constructor(props) {
        super(props);
        this.selectJob = this.selectJob.bind(this)

    }

    selectJob(id) {
        var cookies = Cookies.get('talentAuthToken');
        //url: 'http://localhost:51689/listing/listing/closeJob',
    }



    render() {
        //var a = console.log(this.props.jobs);
        return (
            <React.Fragment>
                <div className="ui container">
                    {this.props.jobs.length > 0 ?
                        <Card.Group itemsPerRow={3} doubling={true}>
                            {this.props.jobs.map((job,id) => (
                                <Card key={id} 
                                    header={
                                        <React.Fragment>
                                            <Card.Header>{job.title}</Card.Header>
                                            <Label as='a' color='black' ribbon='right'>
                                                <Icon name="user" /> {job.noOfSuggestions}
                                            </Label>
                                        </React.Fragment>
                                      }
                    
                                    meta={`${job.location.city}, ${job.location.country}`}
                                    description={
                                        <React.Fragment>
                                        {`${job.summary}`}

                                        </React.Fragment>
                                    }
                                    extra="TODO"
                                />
                                )
                                )}
                        </Card.Group> : <p>No Jobs Found</p>}

                </div>
            </React.Fragment>
        )
    }
}