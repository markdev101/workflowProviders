// src/state/Providers.tsx
import * as React from 'react';
import { FunctionComponent } from 'react';
import { AddressBookProvider } from './state/AddressBook.tsx';
import { EmailProvider } from './state/Email.tsx';

interface Props {
  children: React.ReactNode;
}

const Providers: FunctionComponent<Props> = ({ children }) => (
  <AddressBookProvider>
    <EmailProvider>
      {children}
    </EmailProvider>
  </AddressBookProvider>
);

export default Providers;