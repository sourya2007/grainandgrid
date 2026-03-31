/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkGallery } from './components/WorkGallery';
import { Team } from './components/Team';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <SmoothScrollProvider>
      <main className="relative bg-bg">
        <Navbar />
        <Hero />
        <WorkGallery />
        <Team />
        <About />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
