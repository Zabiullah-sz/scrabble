import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationPanelComponent } from '@app/components/information-panel/information-panel.component';
import { AdminPanelComponent } from '@app/pages/admin-page/admin-panel.component';
import { BestScoresComponent } from '@app/pages/best-scores/best-scores.component';
import { ClassiquePageComponent } from '@app/pages/classique-page/classique-page.component';
import { GamePageComponent } from '@app/pages/game-page/game-page.component';
import { JoindrePartieComponent } from '@app/pages/joindre-partie/joindre-partie.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { MaterialPageComponent } from '@app/pages/material-page/material-page.component';
import { PartieMultijoueurPageComponent } from '@app/pages/partie-multijoueur-page/partie-multijoueur-page.component';
import { SoloGamePageComponent } from '@app/pages/solo-game-page/solo-game-page.component';
import { WaitingRoomPageComponent } from '@app/pages/waiting-room-page/waiting-room-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainPageComponent },
    { path: 'game/:mode', component: GamePageComponent },
    { path: 'material', component: MaterialPageComponent },
    { path: 'mode/:mode', component: ClassiquePageComponent },
    { path: 'partie-multijoueur/:mode', component: PartieMultijoueurPageComponent },
    { path: 'joindre-partie/:mode', component: JoindrePartieComponent },
    { path: 'waiting-room/:mode', component: WaitingRoomPageComponent },
    { path: 'information-panel', component: InformationPanelComponent },
    { path: 'solo-game/:mode', component: SoloGamePageComponent },
    { path: 'top-scores', component: BestScoresComponent },
    { path: 'admin', component: AdminPanelComponent },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
