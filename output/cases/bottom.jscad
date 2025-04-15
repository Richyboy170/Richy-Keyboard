function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[53.4285009,-116.3487962],[76.2812819,-53.5612967]]).appendArc([78.5796597,-52.289718],{"radius":2,"clockwise":true,"large":false}).appendPoint([130.0502775,-63.3173323]).appendArc([130.3153251,-63.3935659],{"radius":2,"clockwise":true,"large":false}).appendPoint([148.8493976,-70.1394167]).appendArc([149.101438,-70.2513877],{"radius":2,"clockwise":true,"large":false}).appendPoint([179.5592159,-86.3828262]).appendArc([180.5025206,-88.8342807],{"radius":2,"clockwise":true,"large":false}).appendPoint([176.2606896,-100.4886154]).appendArc([178.1400749,-103.1726556],{"radius":2,"clockwise":false,"large":false}).appendPoint([194.7639325,-103.1726556]).appendArc([196.6433178,-100.4886154],{"radius":2,"clockwise":false,"large":false}).appendPoint([192.4014869,-88.8342807]).appendArc([193.3447915,-86.3828263],{"radius":2,"clockwise":true,"large":false}).appendPoint([223.8025694,-70.2513876]).appendArc([224.0546098,-70.1394166],{"radius":2,"clockwise":true,"large":false}).appendPoint([242.5886823,-63.393566]).appendArc([242.8537299,-63.3173323],{"radius":2,"clockwise":true,"large":false}).appendPoint([294.3243477,-52.289718]).appendArc([296.6227256,-53.5612967],{"radius":2,"clockwise":true,"large":false}).appendPoint([319.4755065,-116.3487962]).appendArc([318.8393726,-118.5994652],{"radius":2,"clockwise":true,"large":false}).appendPoint([290.4744375,-141.1094203]).appendArc([289.9702981,-141.4012083],{"radius":2,"clockwise":true,"large":false}).appendPoint([240.3880937,-161.1205707]).appendArc([239.9512073,-161.3612647],{"radius":2,"clockwise":false,"large":false}).appendPoint([209.8789151,-183.2222201]).appendArc([207.4173414,-183.136586],{"radius":2,"clockwise":true,"large":false}).appendPoint([194.6174573,-172.3962078]).appendArc([193.331882,-171.9282967],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.5721254,-171.9282967]).appendArc([178.2865501,-172.3962078],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.486666,-183.136586]).appendArc([163.0250923,-183.2222201],{"radius":2,"clockwise":true,"large":false}).appendPoint([132.9528001,-161.3612646]).appendArc([132.5159137,-161.1205708],{"radius":2,"clockwise":false,"large":false}).appendPoint([82.9337093,-141.4012084]).appendArc([82.4295699,-141.1094202],{"radius":2,"clockwise":true,"large":false}).appendPoint([54.0646347,-118.5994652]).appendArc([53.4285009,-116.3487962],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        