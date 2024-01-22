/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleMember } from '../../api/memberData';

export default function ViewMemberPage() {
  const [member, setMember] = useState({});

  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setMember);
  }, []);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={member.image} alt={member.name} style={{ width: '300px' }} />
      </div>
      <div className="text-dark ms-5 details">
        <h5>
          {member.name}
        </h5>
        <p>{member.role}</p>
      </div>
    </div>
  );
}
