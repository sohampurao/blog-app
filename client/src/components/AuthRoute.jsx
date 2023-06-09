/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Store } from '../Store';

export function AdminRoute({ children }) {
  const { state } = useContext(Store);
  const { adminInfo } = state;
  return adminInfo && adminInfo.isAdmin ? (
    children
  ) : (
    <Navigate to="/admin"></Navigate>
  );
}

export function OwnerRoute({ children }) {
  const { state } = useContext(Store);
  const { adminInfo } = state;
  return adminInfo && adminInfo.isOwner ? (
    children
  ) : (
    <>
      <Navigate to="/"></Navigate>
    </>
  );
}
