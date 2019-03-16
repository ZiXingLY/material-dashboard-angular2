import {Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
    selector: 'app-st',
    templateUrl: './st.component.html',
    styleUrls: ['./st.component.scss']
})
export class StComponent implements OnInit, OnChanges {
    @Input() data;
    @Input() columns;
    public tCol: TableColumns[] = [];

    constructor() {
    }

    ngOnInit() {
        console.log(this.data);
        // this.tCol.push({type: 'op', index: 'id', title: 'id'})
        this.tCol.push({type: 'td', index: 'role_title', title: 'role_title'})
        // this.tCol.push({type: 'td', index: '1', title: 'hahahha'})
    }

    pageChange(e: PageEvent) {
        console.log(e)
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
        console.log(this.data)
    }
}

export class TableColumns {
    type: 'td' | 'op' | 'rd';
    title: string;
    index: string;
}

