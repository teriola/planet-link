export function validator(data) {
    let err = {};

    if (!data.email.trim()) err.email = 'Email is required';
    else err.email = '';

    if (!data.password.trim()) err.password = 'Password is requried';
    else err.password = '';
    if (data.password.trim().length <= 6) err.password = 'Password is too small';
    else err.password = '';

    if (!data.repeatPassword?.trim()) err.repeatPassword = 'Passwords must match';

    if (!data.firstName?.trim()) err.firstName = 'First name is required';
    else err.firstName = '';
    if (data.firstName?.trim().length < 2) err.firstName = 'Name is too small';
    else err.firstName = '';

    if (!data.lastName?.trim()) err.lastName = 'Last name is required';
    else err.lastName = '';
    if (data.lastName?.trim().length < 2) err.lastName = 'Surname is too small';
    else err.lastName = '';

    return err;
}