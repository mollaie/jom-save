import { TestBed } from '@angular/core/testing';
import { NativeApiService } from './native-api.service';
describe('NativeApiService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(NativeApiService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=native-api.service.spec.js.map