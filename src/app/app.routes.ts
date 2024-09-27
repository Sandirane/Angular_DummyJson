import { Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { PagenotfoundComponent } from "./pages/pagenotfound/pagenotfound.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { NotAuthenticatedComponent } from "./pages/not-authenticated/not-authenticated.component";

 
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },

    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
    { path: 'products/:id', component: ProductDetailComponent, canActivate: [AuthGuard] }, 
    { path: 'not-authenticated', component: NotAuthenticatedComponent },

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent },
];
