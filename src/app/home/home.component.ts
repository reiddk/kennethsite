import { Component, OnInit, OnDestroy } from '@angular/core';
import { bookInfo, StorageService } from '../services/storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    bookInfos: bookInfo[] = [];
    updateBookInfo: Subscription;

    constructor(private storageService: StorageService) { }

    ngOnInit() {
        this.bookInfos = this.storageService.booksToInfo;
        this.updateBookInfo = this.storageService.getupdatedBooksInfo().subscribe(out => {
            this.bookInfos = out;
        });
    }

    ngOnDestroy() {
        if (this.updateBookInfo) {
            this.updateBookInfo.unsubscribe();
        }
    }

}
