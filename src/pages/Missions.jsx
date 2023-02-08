import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';

function MissionsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
}

export default MissionsPage;
