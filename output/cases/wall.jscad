function xlBoard_extrude_4_outline_fn(){
    return new CSG.Path2D([[49.5833626,-118.1418136],[74.4882644,-49.7161584]]).appendArc([76.7866422,-48.4445797],{"radius":2,"clockwise":true,"large":false}).appendPoint([128.25726,-59.472194]).appendArc([128.5223076,-59.5484276],{"radius":2,"clockwise":true,"large":false}).appendPoint([152.6945359,-68.3463993]).appendArc([152.9465763,-68.4583703],{"radius":2,"clockwise":true,"large":false}).appendPoint([183.4043542,-84.5898088]).appendArc([184.3476589,-87.0412633],{"radius":2,"clockwise":true,"large":false}).appendPoint([180.1058279,-98.695598]).appendArc([181.9852132,-101.3796382],{"radius":2,"clockwise":false,"large":false}).appendPoint([190.9187942,-101.3796382]).appendArc([192.7981795,-98.695598],{"radius":2,"clockwise":false,"large":false}).appendPoint([188.5563486,-87.0412633]).appendArc([189.4996532,-84.5898089],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.9574311,-68.4583702]).appendArc([220.2094715,-68.3463992],{"radius":2,"clockwise":true,"large":false}).appendPoint([244.3816998,-59.5484277]).appendArc([244.6467474,-59.472194],{"radius":2,"clockwise":true,"large":false}).appendPoint([296.1173652,-48.4445797]).appendArc([298.4157431,-49.7161584],{"radius":2,"clockwise":true,"large":false}).appendPoint([323.3206448,-118.1418136]).appendArc([322.6845109,-120.3924826],{"radius":2,"clockwise":true,"large":false}).appendPoint([294.3325022,-142.8921795]).appendArc([293.7982861,-143.1956493],{"radius":2,"clockwise":true,"large":false}).appendPoint([244.5956813,-161.8504866]).appendArc([244.1074345,-162.1185504],{"radius":2,"clockwise":false,"large":false}).appendPoint([210.2535717,-187.4192687]).appendArc([207.7707142,-187.3493229],{"radius":2,"clockwise":true,"large":false}).appendPoint([190.3909611,-172.7659783]).appendArc([189.1053858,-172.2980672],{"radius":2,"clockwise":false,"large":false}).appendPoint([183.7986216,-172.2980672]).appendArc([182.5130463,-172.7659783],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.1332931,-187.3493229]).appendArc([162.6504357,-187.4192688],{"radius":2,"clockwise":true,"large":false}).appendPoint([128.7965729,-162.1185504]).appendArc([128.3083261,-161.8504866],{"radius":2,"clockwise":false,"large":false}).appendPoint([79.1057213,-143.1956492]).appendArc([78.5715053,-142.8921795],{"radius":2,"clockwise":true,"large":false}).appendPoint([50.2194964,-120.3924826]).appendArc([49.5833626,-118.1418136],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function board_extrude_4_outline_fn(){
    return new CSG.Path2D([[53.4285009,-116.3487962],[76.2812819,-53.5612967]]).appendArc([78.5796597,-52.289718],{"radius":2,"clockwise":true,"large":false}).appendPoint([130.0502775,-63.3173323]).appendArc([130.3153251,-63.3935659],{"radius":2,"clockwise":true,"large":false}).appendPoint([148.8493976,-70.1394167]).appendArc([149.101438,-70.2513877],{"radius":2,"clockwise":true,"large":false}).appendPoint([179.5592159,-86.3828262]).appendArc([180.5025206,-88.8342807],{"radius":2,"clockwise":true,"large":false}).appendPoint([176.2606896,-100.4886154]).appendArc([178.1400749,-103.1726556],{"radius":2,"clockwise":false,"large":false}).appendPoint([194.7639325,-103.1726556]).appendArc([196.6433178,-100.4886154],{"radius":2,"clockwise":false,"large":false}).appendPoint([192.4014869,-88.8342807]).appendArc([193.3447915,-86.3828263],{"radius":2,"clockwise":true,"large":false}).appendPoint([223.8025694,-70.2513876]).appendArc([224.0546098,-70.1394166],{"radius":2,"clockwise":true,"large":false}).appendPoint([242.5886823,-63.393566]).appendArc([242.8537299,-63.3173323],{"radius":2,"clockwise":true,"large":false}).appendPoint([294.3243477,-52.289718]).appendArc([296.6227256,-53.5612967],{"radius":2,"clockwise":true,"large":false}).appendPoint([319.4755065,-116.3487962]).appendArc([318.8393726,-118.5994652],{"radius":2,"clockwise":true,"large":false}).appendPoint([290.4744375,-141.1094203]).appendArc([289.9702981,-141.4012083],{"radius":2,"clockwise":true,"large":false}).appendPoint([240.3880937,-161.1205707]).appendArc([239.9512073,-161.3612647],{"radius":2,"clockwise":false,"large":false}).appendPoint([209.8789151,-183.2222201]).appendArc([207.4173414,-183.136586],{"radius":2,"clockwise":true,"large":false}).appendPoint([194.6174573,-172.3962078]).appendArc([193.331882,-171.9282967],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.5721254,-171.9282967]).appendArc([178.2865501,-172.3962078],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.486666,-183.136586]).appendArc([163.0250923,-183.2222201],{"radius":2,"clockwise":true,"large":false}).appendPoint([132.9528001,-161.3612646]).appendArc([132.5159137,-161.1205708],{"radius":2,"clockwise":false,"large":false}).appendPoint([82.9337093,-141.4012084]).appendArc([82.4295699,-141.1094202],{"radius":2,"clockwise":true,"large":false}).appendPoint([54.0646347,-118.5994652]).appendArc([53.4285009,-116.3487962],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        