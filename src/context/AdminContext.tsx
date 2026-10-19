import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  loginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  login: (pin: string) => boolean;
  logout: () => void;
  updatePin: (newPin: string) => void;
  teacherPhoto: string | null;
  setTeacherPhoto: (photo: string | null) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_PIN_KEY = 'malinda_admin_pin';
const ADMIN_AUTH_KEY = 'malinda_admin_auth';
const TEACHER_PHOTO_KEY = 'malinda_teacher_photo';
const DEFAULT_PIN = '2027';

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  });

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const [teacherPhoto, setTeacherPhotoState] = useState<string | null>(() => {
    return localStorage.getItem(TEACHER_PHOTO_KEY) || null;
  });

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const login = (enteredPin: string): boolean => {
    const savedPin = localStorage.getItem(ADMIN_PIN_KEY) || DEFAULT_PIN;
    if (enteredPin === savedPin) {
      setIsAdmin(true);
      localStorage.setItem(ADMIN_AUTH_KEY, 'true');
      setLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem(ADMIN_AUTH_KEY);
  };

  const updatePin = (newPin: string) => {
    if (newPin.trim().length >= 4) {
      localStorage.setItem(ADMIN_PIN_KEY, newPin.trim());
    }
  };

  const setTeacherPhoto = (photo: string | null) => {
    setTeacherPhotoState(photo);
    if (photo) {
      try {
        localStorage.setItem(TEACHER_PHOTO_KEY, photo);
      } catch (e) {
        console.warn('Storage limit exceeded', e);
      }
    } else {
      localStorage.removeItem(TEACHER_PHOTO_KEY);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        loginModalOpen,
        openLoginModal,
        closeLoginModal,
        login,
        logout,
        updatePin,
        teacherPhoto,
        setTeacherPhoto
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
