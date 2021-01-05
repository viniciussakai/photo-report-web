import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReportProvider from 'context/ReportContext'
import MainLayout from 'pages/Layout/MainLayout'
import StepOne from 'pages/Report/StepOne'
import StepTwo from 'pages/Report/StepTwo'

const MainRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <ReportProvider>
            <Route path="/report">
              <Route path="/create">
                <Route path="/step1" element={<StepOne />} />
                <Route path="/step2" element={<StepTwo />} />
              </Route>
            </Route>
          </ReportProvider>
        </Route>
      </Routes>
    </Router>
  )
}

export default MainRoutes
