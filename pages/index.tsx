import React from 'react';
import Layout from '../components/layout'

import Image from 'next/image';
import ToggleTheme from '../components/common/Theme';

function getLayout(page:any) {
  return (
    <Layout />
  )
}

export default getLayout