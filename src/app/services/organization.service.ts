import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import GlobalService from './globalService';
import { environment } from '../../environments/environment';


@Injectable()
export class OrganizationService extends GlobalService {

  url_organizations = environment.url_base_api + environment.paths_api.organizations;

  constructor(public http: HttpClient) {
    super();
  }

  list(filters: {name: string, comparator: string, value: any}[] = null, limit = 100, offset = 0): Observable<any> {
    const headers = this.getHeaders();
    let params = new HttpParams();
    params = params.set('limit', limit.toString());
    params = params.set('offset', offset.toString());

    if (filters != null) {
      for (const filter of filters) {
        console.log(filter);
        let name = '';
        if (filter.name === 'name') {
          name = 'name';
        } else if (filter.name === 'city') {
          name = 'city';
        } else if (filter.name === 'country') {
          name = 'country';
        }

        let comparator = '';
        if (filter.value === null) {
          comparator = 'is_null';
        } else if ( filter.comparator === 'contain') {
          comparator = 'contains';
        }
        if (name && comparator) {
          name += '__' + comparator;
        }

        if (name) {
          params = params.set(name, filter.value);
        }
      }
    }

    return this.http.get<any>(
      this.url_organizations,
      {headers: headers, params: params}
    );
  }

  get(id: number): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(
      this.url_organizations + '/' + id,
      {headers: headers}
    );
  }
}
