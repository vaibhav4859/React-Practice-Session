import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

// Lazy Loading : Lad Code only when it's needed
const NewQuotes = React.lazy(() => import('./pages/NewQuotes'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const Comments = React.lazy(() => import('./components/comments/Comments'));
const LoadComments = React.lazy(() => import('./pages/temp/LoadComments'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
        <Routes>
          <Route path='/' element={<Navigate replace to='/quotes' />} />
          <Route path='/quotes' element={<AllQuotes />} />
          <Route path='/quotes/:quoteId/*' element={<QuoteDetail />} >
            <Route path='comments' element={<Comments />} />
            <Route path='' element={<LoadComments />} />
          </Route>
          <Route path='new-quote' element={<NewQuotes />} />
          <Route path='*' element={<NotFound />} /> {/* if no other path matches mentioned above this is displayed not found page */}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;