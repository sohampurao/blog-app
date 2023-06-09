export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

// cloudinary config
export const CLOUDINARY_CLOUD_NAME = 'dazvnvkca';
export const CLOUDINARY_UPLOAD_PRESET = 'pgu2ly6f';

export const FormatTime = (createdAt) => {
  const date = new Date(createdAt);
  const now = new Date();

  const seconds = Math.floor((now - date) / 1000);
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} ${minutes == 1 ? 'minute' : 'minutes'} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} ${hours == 1 ? 'hour' : 'hours'} ago`;
  }

  const days = Math.floor(hours / 24);
  return `${days} ${days == 1 ? 'day' : 'days'} ago`;
};

export const FormatDate = (createdAt) => {
  const date = new Date(createdAt);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day} ${year}`;
};
