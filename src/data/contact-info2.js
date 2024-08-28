import { ReactComponent as HomeIcon } from '../lib/icons/Home.svg';
import { ReactComponent as EnvelopeIcon } from '../lib/icons/Envelope.svg';
import { ReactComponent as PhoneIcon } from '../lib/icons/Phone.svg';

export const conInfo2 = [
  {
    conIcon: <HomeIcon className='h-[3.4375rem] fill-accent'></HomeIcon>,
    conTitle: 'New Delhi:',
    conCap: 'Jaithpur Ex-2 11044',
  },
  {
    conIcon: <PhoneIcon className='h-[3.4375rem] fill-accent'></PhoneIcon>,
    conTitle: 'Phone:',
    conCap: '+917272929079',
  },
  {
    conIcon: (
      <EnvelopeIcon className='h-[3.4375rem] fill-accent'></EnvelopeIcon>
    ),
    conTitle: 'Email Address:',
    conCap: 'ashif.stack@gmail.com',
  },
];
