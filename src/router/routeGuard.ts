function guard(pathname: string): boolean {
  if (pathname.startsWith('/student')) {
    if (!localStorage.getItem('studentInfo')) {
      return false;
    }
  } else if (pathname.startsWith('/teacher')) {
    if (!localStorage.getItem('token')) {
      return false;
    }
  }
  return true;
}
export default guard;
