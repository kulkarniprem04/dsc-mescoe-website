import React, {Component} from 'react';
import Card from "@material-ui/core/Card";
import {Button, CardActionArea, CardActions} from "@material-ui/core";
import {Col, Container, Image, Row} from "react-bootstrap";

class RankCard extends Component {
  render() {
    const data = this.props.data
    return (
      <Col>
        <Card style={{
          boxShadow: `-10px -10px ${data.medalColor}`,
          borderRadius: 10,
          border: `2px solid ${data.medalColor}`
        }}>
          <CardActionArea>
            <Container>
              <Row className='m-4 align-items-center'>
                {/*<Col xs={2}>*/}
                {/*  <Image className='my-auto'*/}
                {/*         src={data.profileImage}*/}
                {/*         style={{width: '100%', border: `4px solid ${data.medalColor}`, borderRadius: '50%'}}/>*/}
                {/*</Col>*/}
                <Col className='ml-4'>
                  <Row className='justify-content-between'>
                    <p className='h4 font-weight-bold'>{data.name}</p>
                    <p className='h5'>{data.rank === 0 ? null : `Rank -- #${data.rank}`}</p>
                  </Row>
                  <Row className='mt-2'>
                    <p className='h6'>Number of Skill Badges -- {data.numSkillBadges}</p>
                  </Row>
                  <Row className='mt-2'>
                    <p className='h6'>Last Earned Skill Badge -- {data.lastBadgeName}</p>
                  </Row>
                  {/*<Row className='mt-2'>*/}
                  {/*  <p className='h6'>Date -- {data.lastBadgeDate}</p>*/}
                  {/*</Row>*/}
                </Col>
              </Row>
            </Container>
          </CardActionArea>
          <CardActions className='justify-content-end px-3'>
            <a style={{textDecoration: 'inherit'}} rel="noopener noreferrer" target='_blank' href={data.profileURL}>
              <Button variant='outlined' style={{border: `2px solid ${data.medalColor}`, fontWeight: 600}}>
                View Profile
              </Button>
            </a>
          </CardActions>
        </Card>
      </Col>
    );
  }
}

export default RankCard;