import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import styles from './MemberCard.module.css';
import { deleteMember } from '../../api/memberData';

function MemberCard({ memberObj, onUpdate }) {
  const handleDelete = () => {
    deleteMember(memberObj.firebaseKey).then(() => onUpdate());
  };
  return (
    <Card className={styles.memberCard}>
      <Card.Img variant="top" src={memberObj.image} />
      <Card.Body>
        <Card.Title>{memberObj.name}</Card.Title>
        <Card.Text>{memberObj.role}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Link passHref href={`/member/${memberObj.firebaseKey}`}>
          <Button variant="primary">View</Button>
        </Link>
        <Link passHref href={`/member/edit/${memberObj.firebaseKey}`}>
          <Button variant="success">Edit</Button>
        </Link>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
}

MemberCard.propTypes = {
  memberObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MemberCard;
