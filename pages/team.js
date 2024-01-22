/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getAllMembers } from '../api/memberData';
import MemberCard from '../components/MemberCard/MemberCard';
import { useAuth } from '../utils/context/authContext';

export default function TeamPage() {
  const [members, setMembers] = useState([]);
  const { user } = useAuth();

  const getAllTheMembers = () => {
    getAllMembers(user.uid).then(setMembers);
  };

  useEffect(() => {
    getAllTheMembers();
  }, []);
  return (
    <>
      <h1>Team Members</h1>
      <div className="d-flex flex-wrap">
        {members?.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllTheMembers} />
        ))}
      </div>
    </>
  );
}
