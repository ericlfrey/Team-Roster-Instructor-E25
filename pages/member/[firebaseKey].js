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
    <>
      <h1>{member.name}</h1>
    </>
  );
}
