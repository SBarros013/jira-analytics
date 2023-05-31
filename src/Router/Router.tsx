import React, { Suspense } from 'react';

import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../components/DashboardLayout";

const PontosPessoas = React.lazy(() => import("../containers/PontosPessoas").then((m) => ({ default: m.PontosPessoas })))

export const Router = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="" element={
                        <Suspense>
							<PontosPessoas />
						</Suspense>
                    }></Route>
            </Route>
        </Routes>
    )
}