import {Component, EventEmitter, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-st',
  templateUrl: './st.component.html',
  styleUrls: ['./st.component.scss']
})
export class StComponent implements OnInit {
  public data = [`<td>
            1
          </td>
          <td>
            Dakota Rice
          </td>
          <td>
            Niger
          </td>
          <td>
            Oud-Turnhout
          </td>
          <td class="text-primary">
            $36,738
          </td>`,
  `<td>
            1
          </td>
          <td>
            Dakota Rice
          </td>
          <td>
            Niger
          </td>
          <td>
            Oud-Turnhout
          </td>
          <td class="text-primary">
            $36,738
          </td>`,
  `<td>
            1
          </td>
          <td>
            Dakota Rice
          </td>
          <td>
            Niger
          </td>
          <td>
            Oud-Turnhout
          </td>
          <td class="text-primary">
            $36,738
          </td>`];
  constructor() { }

  ngOnInit() {
  }
  pageChange(e: PageEvent) {
    console.log(e)
  }
}
