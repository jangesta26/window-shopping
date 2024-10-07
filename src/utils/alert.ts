import Swal from 'sweetalert2';

export const showSuccessAlert = (message: string) => {
    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: message,
        background: '#d4edda',
        color: '#155724',
        showConfirmButton: false,
        timer: 2000,
        customClass: {
            popup: 'animated-alert',
        },
    });
};

export const showErrorAlert = (message: string) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
        background: '#f8d7da',
        color: '#721c24',
        confirmButtonColor: '#d33',
        customClass: {
            popup: 'animated-alert',
        },
    });
};
