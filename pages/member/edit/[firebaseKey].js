import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MemberForm from '../../../components/MemberForm/MemberForm';
import { getSingleMember } from '../../../api/memberData';

export default function EditMemberPage() {
  const [member, setMember] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setMember);
  }, []);
  return (
    <MemberForm memberObj={member} />
  );
}
